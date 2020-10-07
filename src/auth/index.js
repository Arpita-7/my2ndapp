export const authenticate = (jwt,next) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("jwt",JSON.stringify(jwt));
        next();
    }
};

export const logout = (next) => {
    if (typeof window !== "undefined") localStorage.removeItem("jwt")
    next()
    return fetch ("http://localhost:3050/logout",{
        method: "GET"
    })
    .then (response => {
    console.log("logout",response)
    return response.json()
    })
    .catch (err => console.log(err))
    };
    
    export const isAuthenticated =  () => {
       if (typeof window == "undefined") {
           return false;
       } 
       if (localStorage.getItem("jwt")) {
           return JSON.parse(localStorage.getItem("jwt"))
       } else {
           return false;
       }
    };


  