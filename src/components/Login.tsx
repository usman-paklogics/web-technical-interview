import Link from "next/link"
import { useState } from "react"
import Users from "../../data/users.json"
import Input from "./Input/Input"
import styles from "./Login.module.css"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const emailHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(evt.target.value)
    setError("")
  }

  const passwordHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value)
    setError("")
  }

  const onSubmit = (e: any) => {
    e.preventDefault()
    if (!email || !password) {
      if (!email) {
        setError('Email is required');
        return
      }
      else {
        setError('Password is required')
        return
      }
    }

    const user = Users.find(
      (user) => user.email === email && user.password === password
    )

    if (user) {
      localStorage.setItem("User", JSON.stringify(user))
      alert("User login successfully")
    } else {
      setError("User does not exists")
    }
  }
  return (
    <>
      <div className={styles.container}>
        <div className="grid xl:grid-cols-12 md:grid-cols-12 xs:grid-cols-7 gap-4">
          <div className="col-span-7">
            <div className={styles.loginWrapper}>
              <div className={styles.logoWrapper}>
                <img src="/images/logo2.png" alt="logo" />
                <h2 className={styles.logoContent}>Revive</h2>
              </div>
              <div className="flex items-center justify-center h-full w-full">
                <div className={styles.formWrapper}>
                  {
                    error && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                      {error}
                    </div>
                  }
                  <form onSubmit={onSubmit}>
                    <h2 className="text-2xl">Sign in</h2>
                    <div className="py-3">
                      <Input
                        value={email}
                        placeholder="Enter email"
                        type="email"
                        onChange={emailHandler}
                      />
                    </div>
                    <div className="py-3">
                      <Input
                        value={password}
                        placeholder="Enter password"
                        type={"password"}
                        onChange={passwordHandler}
                      />
                    </div>
                    <div className="py-3">
                      <button
                        type="submit"
                        className="bg-gray-400 w-full py-3 text-white hover:bg-gray-500"
                      >
                        Login
                      </button>
                      <Link href={"#"}>
                        <a className="text-gray-400 float-right">
                          Forgot password?
                        </a>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-5 hidden md:block">
            <div className={styles.bg_img} />
          </div>
        </div>
      </div>
    </>
  )
}
