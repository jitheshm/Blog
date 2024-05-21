"use client"

import { url } from "inspector"
import { useState } from "react"
import { z } from "zod"
import instance from "@/axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Cookies from 'js-cookie';
import { useDispatch } from "react-redux"
import { verify } from "@/features/user/userSlice"
import { AxiosResponse } from "axios"

const signupSchema = z.object({

    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long")
})

type signinResponse = {
    message: string
    success: boolean
    token: string
    name: string

}

function Signin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState<{ fullName?: string, email?: string, password?: string }>({})
    const router = useRouter()
    const dispatch = useDispatch()
    

    const handleSubmit = () => {

        const result = signupSchema.safeParse({ email, password })
        if (!result.success) {

            const fieldErrors = result.error.flatten().fieldErrors
            setErrors({

                email: fieldErrors.email?.[0],
                password: fieldErrors.password?.[0],
            })
            return
        }


        setErrors({})
        instance.post('/api/user/signin', { email, password }).then((res: AxiosResponse<signinResponse>) => {
            if (res.data.success) {
                Cookies.set('token', res.data.token, { expires: 365 })
                console.log(res.data.name);

                dispatch(verify({ name: res.data.name }))
                router.push('/')
            }
        })
    }



    return (
        <div className="" style={{ backgroundColor: "rgb(229 229 229 / 41%)" }}>
            <section className="vh-100 ">
                <div className="container py-1 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card" style={{ borderRadius: '1rem' }}>


                                <div className="card-body p-5 text-center">
                                    <div className="mb-md-5 mt-md-4 pb-2">
                                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                        <p className="text-white-50 mb-3">Please enter your login and password!</p>
                                        <div data-mdb-input-init className="form-outline form-white mb-2">
                                            <label className="form-label" htmlFor="typeEmailX">Email</label>
                                            <input type="email" id="typeEmailX" className="form-control form-control-lg" value={email} onChange={(e) => setEmail(e.target.value)} />
                                            {errors.email && <div className="text-danger">{errors.email}</div>}
                                        </div>
                                        <div data-mdb-input-init className="form-outline form-white mb-2">
                                            <label className="form-label" htmlFor="typePasswordX">Password</label>
                                            <input type="password" id="typePasswordX" className="form-control form-control-lg" value={password} onChange={(e) => setPassword(e.target.value)} />
                                            {errors.password && <div className="text-danger">{errors.password}</div>}
                                        </div>
                                        <p className="small mb-2 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
                                        <button data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-lg px-5" type="button" onClick={handleSubmit}>Login</button>

                                    </div>
                                    <div>
                                        <p className="mb-0">Don't have an account? <a href="#!" className="text-dark-50 fw-bold">Sign Up</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </div >
    )
}

export default Signin