import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,

} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import { Espanol } from "./idioma/espanol";
import { English } from "./idioma/english";


export function Home() {
  const [idioma,SetIdioma] = useState(Espanol)

  const [input, setInput] = useState({
    user_name:""
  })

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_7xyfkg4','template_57hl205',event.target,'m5WckzauftB5sQze6')
    .then(response => Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Email enviado exitosamente',
      text:"Le responderemos dentro de las 24 horas. Muchas gracias !",
      showConfirmButton: false,
      timer: 3500
    }))
    setInput({user_name:""})
    .catch(error => console.log(error))
  }

  const handleLenguaje = (e) =>{
    e.preventDefault()
    e.target.value=="English"?SetIdioma(English):SetIdioma(Espanol)
  }
  
  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value, // por name le paso valor
    });
  }



  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
          <div className="select-change-idioma">
        <p>Languaje</p>
        <select name='Languaje' onChange={handleLenguaje}>
            <option value="Espanol">Spanish 🇪🇸</option>
            <option value="English">English 🇬🇧</option>       
        </select>
        </div>
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                {idioma.titulo} 

              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                
                {idioma.subtitulo}

              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {idioma.featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}

          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                {idioma.trabajo}
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
               {idioma.subtrabajo}
              </Typography>
              <Button variant="outlined">read more</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/teamwork.jpeg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    {idioma.services}

                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    
                    {idioma.services_sub}
                    
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle heading={ idioma.personal_titulo }>

            {idioma.personal_sub}

          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-lg fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <div className="container mx-auto">
          <PageTitle heading={idioma.construye}>
            
                {idioma.construye_sub}

          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {idioma.contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle heading={idioma.contacto_titulo}>
          
          {idioma.construye_sub}

          </PageTitle>
          <form onSubmit={sendEmail} className="mx-auto mt-12 max-w-3xl text-center">
            <div className="mb-8 flex gap-8">
              <Input variant="standard" size="lg" label={idioma.contacto_nombre} name='user_name' value={input.user_name} onChange={handleChange} type="text"/>
              <Input variant="standard" size="lg" label={idioma.contacto_email} name='user_email' type="email"/>
            </div>
            <Textarea variant="standard" size="lg" label={idioma.contacto_message} rows={8} name="user_message"/>
            <button>
            <Button variant="gradient" size="lg" className="mt-8">
              {idioma.sentMessage}
            </Button>
            </button>
          </form>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
