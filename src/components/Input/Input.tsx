type inputType = {
  value: string,
  placeholder: string,
  type: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}
function Input(props: inputType) {
  const { value, onChange, placeholder, type } = props
  return (
    <input
      type={type}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

export default Input
