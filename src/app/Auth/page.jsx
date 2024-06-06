import CardLogins from "@/components/cards/cardLogins";
import React from "react";

const AuthLogin = (props) => {
  return (
    <>
      <div className="w-full min-h-dvh flex justify-center items-center">
        <CardLogins className={"space-y-5"}>
          <h1 className="text-4xl font-bold">Logins.</h1>

          <form action="">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col w-full">
                <label htmlFor="" className="label-text">
                  Email.
                </label>
                <input type="email" className="input input-sm input-bordered" />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="" className="label-text">
                  Password.
                </label>
                <input
                  type="password"
                  className="input input-sm input-bordered"
                />
              </div>
              <button
                type="button"
                className="btn btn-sm btn-primary shadow-md"
              >
                Logins
              </button>
            </div>
          </form>
        </CardLogins>
      </div>
    </>
  );
};

export default AuthLogin;
