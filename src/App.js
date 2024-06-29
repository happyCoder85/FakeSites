import React from 'react';
import Logo from './assets/FakeSites Logo.webp'
import alexWilliamsImage from './assets/project-images/alex-williams.png';
import davidLeeImage from './assets/project-images/david-lee.png';

function App() {

  const year = new Date().getFullYear();
  const personas = [
    {
      name: 'Alex Williams',
      requirements: ['A clean presentation for his new book, with excerpts and reviews.', 'A contact page with his social media accounts.'],
      description: ['Alex Williams is a budding author who wanted to create an online presence for his latest book.', 'His website needed to be simple yet elegant, showcasing his writing skills and providing a platform for readers to learn more about his work.', 'The design features a clean layout with excerpts from his book and reviews from readers.', 'A contact page with links to his social media accounts allows visitors to connect with him online.'],
      image: alexWilliamsImage,
      stack: ['HTML', 'CSS'],
      link: 'https://alex-williams.jonspurling.ca',
      github: 'https://github.com/happyCoder85/FakeSites/tree/main/Author-AlexWilliams',
    }, 
    {
      name: 'David Lee',
      requirements: ['A visually stunning portfolio to display his photography.', 'UI Animations to provide a enhanced aesthetic. ', 'A blog to share stories and insights from his world travels.'],
      description: ['David Lee is a globetrotting photographer who captures the beauty of the world through his lens.', 'His website needed to be as captivating as his photos, providing a seamless experience for visitors to explore his portfolio and read about his adventures.', 'The design includes a sleek, minimalist portfolio section and an engaging blog that highlights his travel experiences.'],
      image: davidLeeImage,
      stack: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://david-lee.jonspurling.ca',
      github: 'https://github.com/happyCoder85/FakeSites/tree/main/Photographer-DavidLee',
    }, 
  ];

  const handleLinkClick = (url) => {
    window.open(url, '_blank');
  }

  return (
    <div className="app bg-zinc-800 text-white">
      <main className="max-w-7xl w-full md:max-w-screen-lg mx-auto bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-2xl shadow-violet-500">
        <header>
          <h1 className="text-slate-900 py-10 text-center text-3xl md:w-96 md:mx-auto">Welcome to Fake Sites: Where Imagination Meets Innovation</h1>
          <img src={Logo} alt="Fake Sites Logo" className="mx-auto md:w-96" />
          <p className='w-sm my-2 mx-auto text-center w-5/6'>Discover a world where creativity and technology intersect. Dive into our unique portfolio of conceptual projects that showcase the potential of digital experiences.</p>
        </header>
        <section className='w-11/12 mx-auto'>
          <div>
            <h2 className="text-2xl text-slate-900 pt-3 pb-1">What is Fake Sites</h2>
            <p className="py-2">
              Fake Sites is a creative initiative designed to push the boundaries of web development and design.
            </p>
            <p className="py-2"> This project involves creating fictional personas and businesses, each with their own distinct identity and set of requirements.</p> 
            <p className="py-2">The goal is to explore innovative web solutions and demonstrate what’s possible when creativity is combined with cutting-edge technology.</p>
          </div>

          <div className="card">
            <h2 className="text-2xl text-slate-900 pt-3 pb-1">Why I Created It</h2>
            <p className="py-2">
              I created Fake Sites to challenge conventional web design norms and to showcase the limitless potential of digital storytelling. 
            </p>
            <p className="py-2">
              By crafting these imaginative scenarios, I aim to inspire others in the field and provide a comprehensive portfolio that illustrates a wide range of web development capabilities. 
            </p>
            <p className="py-2">
              Each project within Fake Sites serves as a case study in solving unique digital challenges with creative solutions.
            </p>
          </div>

          <h2 className="text-2xl text-slate-900 pt-3 pb-1">Meet Our Personas</h2>
          <div className="lg:flex lg:flex-row justify-evenly">
            {personas.map((persona, index) => (
              <div key={index} className="bg-slate-700 rounded-xl pb-10 mb-10 shadow-2xl shadow-black lg:w-96 h-3/5">
                <img src={persona.image} alt={persona.name} className="h-48 w-96 object-cover object-top"/>
                <div className='px-5'>
                  <h3 className='text-xl font-bold text-violet-500 pt-2'>{persona.name}</h3>
                  <div>
                    <h4 className='text-fuchsia-500 pb-2'>Requirements</h4>
                    <ul className="flex flex-col">
                      {persona.requirements.map((requirement, index) => (
                        <li key={index} className='bg-fuchsia-500 mb-3 py-1 px-5 text-black text-center rounded-md font-bold grow' >{requirement}</li>
                      ))}
                    </ul>
                    <h4 className='text-fuchsia-500 '>Description</h4>
                    <div className="flex flex-col justify-between pt-4">
                    <div>
                      {persona.description.map((description, index) => (
                        <p key={index} className="w-80 pb-2 mx-auto">
                          {description}
                        </p>
                      ))}
                    </div>
                    </div>
                 </div>
            {/*I want this section to be at the bottom of the card, but it's not working. I tried using flexbox, but it didn't work. I also tried using grid, but that didn't work either. I'm not sure what I'm doing wrong.*/}
            <div className="flex-end">
                    <h4 className='text-fuchsia-500 py-2'>Tech Stack:</h4>
                    <div className="flex flex-row gap-4 mx-auto my-5">
                        {persona.stack.map((stack, index) => (
                          <span key={index} className='bg-fuchsia-500 text-white font-bold py-1 px-2 rounded mx-auto mx-1'>{stack}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className='text-fuchsia-500 pb-2'>Links:</h4>
                      <div className="flex flex-row gap-4 mx-auto my-2">
                        <button onClick={() => handleLinkClick(persona.link)} className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 mx-auto mx-2 flex rounded">Live Site</button>
                        <button onClick={() => handleLinkClick(persona.github)} className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 mx-auto flex rounded">GitHub</button>
                      </div>
                    </div>
                  </div>
                </div>
              
            ))}
          </div>
          {/* END SECTION */}
        </section>
        <footer className="app-footer text-center">
          <p>&copy;{year} - <a href="https://jonspurling.ca" className='hover:text-black'>Jonathan Spurling</a></p>
        </footer>
      </main>
    </div>
  );
}

export default App;