import React from 'react';


const list = [
    {
        title: 'Jones Landscaping Services',
        repository: 'link ',
        // deployed: '',
        // preview: Img,
        // alt: 'put alt here',
        description: 'description',
        // tech: '',
        key: 9,
    },
    {
        // title: 'title',
        // repository: 'link',
        // deployed: 'link',
        // preview: Img,
        // alt: 'alt',
        // description: 'description',
        // // tech: '',
        // key: number,
    },
]

function CurrentProjects() {
    return (
         <section id="projects" className="flexcards content">   
                 <div className="columns is-flex is-flex-wrap-wrap is-justify-content-center">
        <p></p>
        {list.map((detail, i) => (
            <article className="box column is-one-third projectcol m-1" key={detail.key}>
                <p data-value={detail.title} className="title">{detail.title}</p>
                {/* <figure>
                    <img src={detail.preview} alt={detail.alt}/>
                </figure> */}
                <p data-value={detail.description} className="text">{detail.description}</p>
                <div className="level is-mobile">
                    <div className="level-item has-text-centered">
                        <div>
                            <a href={detail.repository} target="_blank" rel="noreferrer" ><button className="button is-small" data-value={detail.repository}  >Repository</button></a>
                        </div>
                    </div>
                    {/* <div className="level-item has-text-centered">
                        <div>
                            <a href={detail.deployed} target="_blank" rel="noreferrer" ><button className="button is-small" data-value={detail.deployed} >Application</button></a>
                        </div>
                    </div> */}
                </div>
            </article>
        ))}
    </div>;
        </section >
    )
}

export default CurrentProjects
