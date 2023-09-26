
const objet =[
    {id:1,
    titre:`projet1`,
    logo:"/images/proj1.jpg",
     },
    {id:2,
        titre:`projet2`,
        logo:"/images/proj2.jpg",
         },
    {id:3,
            titre:`projet3`,
            logo:"/images/proj3.jpg",
             },
    {id:4,
                titre:`projet4`,
                logo:"/images/proj4.jpg",
                 },
    
]

const Project=()=>{
    return(
        <>
      {objet.map((arr)=>(
        <div className="projects-container">
        <div className="project-card">
        <img src={arr.logo} alt="project" />
        <h3>{arr.titre}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
          aliquam.
        </p>
        <p><a href="#">Github Link</a></p>
      </div></div>
      ))}
        </>
    )
}
export default Project;