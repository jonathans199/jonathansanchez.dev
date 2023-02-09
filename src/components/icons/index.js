const Icon = ({ IconType, title }) => {
  return (
    <div className={`items-center flex justify-start p-0 flex-col mb-4 mr-0 h-28sm:h-auto`}>
      <div
        className={`w-16 text-slate-600 sm:w-20 h-16 sm:h-20 group transition-all duration-200 ease-in-out transform translate-y-0 group hover:-translate-y-0 translate-x-0`}>
        <IconType />
      </div>
      {title ? (
        <p className={`mt-4 text-slate-600 text-sm sm:text-sm font-semibold tracking-wide opacity-100 normal-case text-center`}>
          {title}
        </p>
      ) : null}
    </div>
  )
}

export default Icon
