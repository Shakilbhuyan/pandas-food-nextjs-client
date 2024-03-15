import Link from "next/link";



const NotFoundPage = () =>{
    return(
   <>
   <div className="my-20 mx-auto text-center h-screen">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">
       Go back to home
      </Link>
    </div>
   </>
    )
}

export default NotFoundPage;