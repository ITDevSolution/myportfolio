import React from "react"
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form"
import { useRouter } from "next/router"

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}
type Props = {}

function ContactMe({ }: Props) {
  const router = useRouter()
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    router.push(`mailto:jronceros.byj@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`)
  }

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.
          <span className="decoration-[#03ffcf] underline">Lets Talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#03ffcf] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+51939-217-383</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#03ffcf] h-7 w-7 animate-pulse" />
            <p className="text-2xl">jronceros.byj@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#03ffcf] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Jr. Huallaga 807 DP. 201 Center Lima</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#03ffcf] py-5 px-10 rounded-md text-black font-bold text-lg hover:bg-[#03ffcf]/40 transition-all duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe
