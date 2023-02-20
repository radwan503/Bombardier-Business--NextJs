import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { useForm,SubmitHandler } from "react-hook-form";

type Inputs={
  email:any,
  password:any
}

const MemberLogin = () => {
const router = useRouter();
const  {register,handleSubmit} = useForm<Inputs>();
const onsubmit:SubmitHandler<Inputs> = data =>  loginUser(data);
const loginUser = async (data:any) =>{
 await fetch('https://dummyjson.com/auth/login',{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({
      username:data.email,
      password:data.password
    })
  })
  .then(res=>res.json())
  .then(data2 => console.log(data2) )
  
}

  return (
    <div className="section-padding">
      <main className="form-signin w-100 h-100 m-auto">
        <form onSubmit={handleSubmit(onsubmit)}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="text"
              {...register("email")}
              className="form-control rounded-0"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label>Email address</label>
          </div>
          <div className="form-floating">
            <input
              {...register("password")}
              type="password"
              className="form-control rounded-0"
              id="floatingPassword"
              placeholder="Password"
            />
            <label>Password</label>
          </div>

       

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>

          <input className="w-100 btn btn-lg btn-primary" type="submit" />
           
          <div className="mt-3">
          <p className="my-0">Forgot your <strong><Link href="#">password</Link></strong> ?</p>
          <p>Dont have an account? <strong><Link href="/signup">Sign Up</Link></strong> </p>
          </div>
        </form>
      </main>
    </div>
  );
};

export default MemberLogin;
