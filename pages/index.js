

// ---------------------------------------------------
//            Home 
// ---------------------------------------------------   
export default function Home ({data}) {
    

    //
    return (
      <div className="blue darken-4">

        <h1>
          Hello World!
        </h1>

      </div>
    );
}

  
  
   
// 1. `getServerSideProps` instead of `getStaticProps`
export async function getServerSideProps() {
   
  return {props: {data: {}}}

}


