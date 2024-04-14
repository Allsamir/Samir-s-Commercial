import { useForm } from "react-hook-form"
const Register = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    const {firstName, gender} = data
    console.log(firstName, gender)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  )
}

export default Register