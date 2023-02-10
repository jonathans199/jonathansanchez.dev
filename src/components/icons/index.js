const Icon = ({ IconType, title }) => {
  return (
    <div className={`items-center flex justify-start p-0 flex-col mb-4 mr-0sm:h-auto`}>
      <div
        className={`w-16 text-slate-500 sm:w-36 group transition-all duration-200 ease-in-out transform translate-y-0 group hover:-translate-y-0 translate-x-0`}>
        <IconType />
      </div>
      {title ? (
        <p className={`mt-4 text-slate-500 font-semibold tracking-wide opacity-100 normal-case text-2xl text-center`}>
          {title}
        </p>
      ) : null}
    </div>
  )
}

export default Icon
