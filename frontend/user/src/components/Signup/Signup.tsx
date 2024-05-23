"use client"
import instance from "@/axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { z } from "zod"

// Define the schema using Zod
const signupSchema = z.object({
    fullName: z.string().trim().min(3, "Full name is required").regex(/^[a-zA-Z\s]+$/, "Full name can only contain letters and spaces"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long")
})

function Signup() {

    const [fullName, setFullName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [errors, setErrors] = useState<{ fullName?: string, email?: string, password?: string,exist?:string }>({})
    const router = useRouter()

    const handleSubmit = () => {

        const result = signupSchema.safeParse({ fullName, email, password })
        if (!result.success) {

            const fieldErrors = result.error.flatten().fieldErrors
            setErrors({
                fullName: fieldErrors.fullName?.[0],
                email: fieldErrors.email?.[0],
                password: fieldErrors.password?.[0],
            })
            return   
        }


        setErrors({})
        instance.post('/api/users/signup', { name: fullName, email, password }).then((res) => {
            if (res.data.success) {
                router.push('/signin')
            } else {
                setErrors({
                    exist: res.data.message
                })
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
                                        <h2 className="fw-bold mb-2 text-uppercase">Signup</h2>
                                        <p className="text-white-50 mb-3">Please enter your Details</p>
                                        {errors.exist && <div className="text-danger">{errors.exist}</div>}
                                        <div data-mdb-input-init className="form-outline form-white mb-2">
                                            <label className="form-label" htmlFor="">Full Name</label>
                                            <input type="text" id="" className="form-control form-control-lg" value={fullName} onChange={(e) => { setFullName(e.target.value) }} />
                                            {errors.fullName && <div className="text-danger">{errors.fullName}</div>}
                                        </div>
                                        <div data-mdb-input-init className="form-outline form-white mb-2">
                                            <label className="form-label" htmlFor="typeEmailX">Email</label>
                                            <input type="email" id="typeEmailX" className="form-control form-control-lg" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                            {errors.email && <div className="text-danger">{errors.email}</div>}
                                        </div>
                                        <div data-mdb-input-init className="form-outline form-white mb-2">
                                            <label className="form-label" htmlFor="typePasswordX">Password</label>
                                            <input type="password" id="typePasswordX" className="form-control form-control-lg" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                            {errors.password && <div className="text-danger">{errors.password}</div>}
                                        </div>
                                        <button data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-lg px-5" type="button" onClick={handleSubmit}>Create</button>
                                    </div>
                                    <div>
                                        <p className="mb-0">Have an account? <Link href="/signin" className="text-dark-50 fw-bold">Sign In</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup
