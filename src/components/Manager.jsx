import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { v4 as uuidv4 } from "uuid";
import "react-toastify/dist/ReactToastify.css";



export default function Manager() {
  const ref = useRef();
  const [show, setShow] = useState(false);
  const [PasswordArray, setPasswordArray] = useState([]);

const getpassword = async() =>{
  let req = await fetch("http://localhost:3000/") 
  let passwords = await req.json();
        console.log(passwords); 
        setPasswordArray(passwords);
   
}


  useEffect(() => {
    getpassword(); 
  }, [])

  const copyText = (text) => {
    toast('Copied to Clipboard', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

    navigator.clipboard.writeText(text)
  }

  const showpass = () => {
    setShow(!show);
  };
  const [form, setform] = useState({ site: "", username: "", password: "" });

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }
  const SavePassword = async () => {
    if (
    form.site.trim() === "" ||
    form.username.trim() === "" ||
    form.password.trim() === ""
  ) {
    toast("Please fill all fields", {
      position: "top-right",
      autoClose: 3000,
      theme: "dark",
    });

    return;
  } 
  const updated = [...PasswordArray, {...form,id:uuidv4()}];
  setPasswordArray(updated);
  let res = await fetch("http://localhost:3000/", {
    method:"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({...form,id:uuidv4()})
  });
  
   // localStorage.setItem("passwords", JSON.stringify(updated));
   // console.log(updated);
    setform({ site: "", username: "", password: "" });
    toast('Password Saved Successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }

  const DeletePassword =async (id) => {
    console.log("Delete Password with ",id) 
    let c = confirm("Do you really want to delete this password ?")
    if(c){
      const updated = PasswordArray.filter(item=>item.id!==id);
    setPasswordArray(updated);
    let res = await fetch("http://localhost:3000/", {
    method:"DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({...form,id})
  });
   // localStorage.setItem("passwords", JSON.stringify(updated));
    console.log(updated);
    toast('Password Deleted Successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    }

    
  }

  const EditPassword = (id) => {
    console.log("Edit Password with",id)
     const updated = (PasswordArray.filter(item=>item.id===id)[0]);
     setPasswordArray(PasswordArray.filter(item=>item.id!==id));
     setform(updated);


    // localStorage.setItem("passwords", JSON.stringify(updated));
    // console.log(updated);
  }





  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <div className="relative min-h-screen flex flex-col items-center py-1.5 bg-green-50">

        {/* Background grid */}
        <div className="absolute inset-0 -z-10 h-full w-full 
        bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),
        linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] 
        bg-[size:14px_24px]">
        </div>


        {/* Main Content */}
        <div className="w-full max-w-3xl mt-16 px-4">

          {/* Title */}
          <div className="text-center py-1.5 mb-8">
            <h1 className="text-3xl font-bold text-green-500">
              {"<PassOP/>"}
            </h1>
            <p className="text-gray-600 text-sm">
              Your own Password Manager
            </p>
          </div>



          {/* Input Section */}
          <div className="flex flex-col gap-4">

            {/* Website */}
            <input
              type="text" value={form.site}
              placeholder="Enter website URL" onChange={handleChange}
              className="w-full px-5 py-3 rounded-full border border-gray-300 
            focus:outline-none focus:ring-1 focus:ring-green-400"
              name="site"
            />


            <div className="flex gap-4">
              <input
                type="text" value={form.username}
                placeholder="Enter Username" onChange={handleChange}
                className="w-full px-4 py-3 rounded-full border border-gray-300 
              focus:outline-none focus:ring-1 focus:ring-green-400"
                name="username"
              />

              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  value={form.password}
                  placeholder="Enter Password"
                  onChange={handleChange}
                  name="password"
                  className="w-full pl-4 pr-16 py-3 rounded-full border border-gray-300 
  focus:outline-none focus:ring-1 focus:ring-green-400"
                />

                <span
                  className="absolute right-3 top-1/2 -translate-y-1/2 lordiconcopy cursor-pointer"
                  onClick={showpass}
                >
                  <img
                    className="p-1"
                    width={35}
                    src={show ? "/eye.png" : "/hidden.png"}
                    alt="eye"
                  />
                </span>
              </div>
            </div>


            {/* Button */}
            <div className="flex justify-center py-1.5 mt-4">
              <button className="flex items-center py-1.5 gap-1 bg-green-500  
              hover:bg-green-600 text-white px-6 py-3 rounded-full 
              shadow-md transition duration-200" onClick={SavePassword} >

                {/* Icon */}
                <lord-icon
                  src="https://cdn.lordicon.com/geanrpxb.json"
                  trigger="hover"
                  colors="primary:#9cf4a7"
                >
                </lord-icon>

                Save Password
              </button>
            </div>

            <div className="passwords ">
              <h2 className="font-bold text-2xl py-4">Your Passwords :</h2>
              {PasswordArray.length === 0 && (
                <p className="text-gray-600 text-center py-4">No passwords added yet.</p>
              )}{PasswordArray.length > 0 &&
                <table className="table-auto w-full bg-green-200 rounded-md overflow-hidden">
                  <thead className=" bg-green-800 text-white">
                    <tr>
                      <th className="py-1">Site</th>
                      <th className="py-1">Username</th>
                      <th className="py-1">Password</th>
                      <th className="py-1">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-green-100">
                    {PasswordArray.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td className=" text-center py-1.5">
                            <div className="flex items-center justify-center ">
                              <a href={item.site} target="_blank"><span>{item.site}</span></a>

                              <div className="lordiconcopy cursor-pointer w-5 " onClick={() => copyText(item.site)}>

                                <lord-icon
                                  src="https://cdn.lordicon.com/hmpomorl.json"
                                  style={{ width: "25px", height: "25px" }}
                                  trigger="hover">
                                </lord-icon>
                              </div>
                            </div>
                          </td>
                          <td className=" text-center py-1.5">
                            <div className="flex items-center justify-center">
                              <span>{item.username}</span>
                              <div className="lordiconcopy cursor-pointer w-5" onClick={() => copyText(item.username)}>

                                <lord-icon
                                  src="https://cdn.lordicon.com/hmpomorl.json"
                                  style={{ width: "25px", height: "25px" }}
                                  trigger="hover">
                                </lord-icon>
                              </div>
                            </div>
                          </td>
                          <td className=" text-center py-1.5">
                            <div className="flex items-center justify-center">
                              <span>{"*".repeat(item.password.length)}</span>
                              <div className="lordiconcopy cursor-pointer w-5 " onClick={() => copyText(item.password)}>

                                <lord-icon
                                  src="https://cdn.lordicon.com/hmpomorl.json"
                                  style={{ width: "25px", height: "25px" }}
                                  trigger="hover">
                                </lord-icon>
                              </div>
                            </div>
                          </td>


                          <td className=" text-center py-1.5">
                            <span className="cursor-pointer mx-1 " onClick={() => EditPassword(item.id)}>
                              <lord-icon
                                src="https://cdn.lordicon.com/exymduqj.json"
                                trigger="hover"
                                style={{ "width": "25px", "height": "25px" }}>
                              </lord-icon>
                            </span>
                            <span className="cursor-pointer mx-1 " onClick={() => DeletePassword(item.id)}>
                              <lord-icon
                                src="https://cdn.lordicon.com/jzinekkv.json"
                                trigger="hover"
                                style={{ "width": "25px", "height": "25px" }}>
                              </lord-icon>
                            </span>
                          </td>
                        </tr>
                      )

                    })}

                  </tbody>
                </table>

              }
            </div>

          </div>
        </div>
      </div>
    </>
  );
}