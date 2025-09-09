import React from 'react'

interface TechIconProps {
  name: string
  className?: string
}

// Icon name mapping for the CDN
const iconMapping: Record<string, string> = {
  'javascript': 'javascript/javascript-plain',
  'typescript': 'typescript/typescript-plain', 
  'react': 'react/react-original',
  'react native': 'react/react-original',
  'node': 'nodejs/nodejs-plain',
  'next.js': 'nextjs/nextjs-original',
  'html': 'html5/html5-plain',
  'css': 'css3/css3-plain',
  'sass': 'sass/sass-original',
  'tailwind': 'tailwindcss/tailwindcss-plain',
  'mongodb': 'mongodb/mongodb-plain',
  'express': 'express/express-original',
  'aws': 'amazonwebservices/amazonwebservices-plain-wordmark',
  'firebase': 'firebase/firebase-plain',
  'bootstrap': 'bootstrap/bootstrap-plain',
  'expo': 'expo/expo-original',
  'ruby': 'ruby/ruby-plain',
  'ruby on rails': 'rails/rails-plain',
  'gcp': 'googlecloud/googlecloud-plain',
  'supabase': 'supabase/supabase-plain',
  'shopify': 'shopify/shopify-plain'
}

// Fallback SVG icons for problematic ones
const fallbackIcons: Record<string, React.ReactNode> = {
  'aws': (
    <div className="w-full h-full group">
      <svg viewBox="0 0 24 24" className="w-full h-full fill-slate-600 group-hover:fill-orange-400 transition-all duration-300">
        <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.192 0 .088-.056.176-.168.264l-.56.375c-.08.056-.16.08-.24.08-.095 0-.184-.048-.272-.128a2.987 2.987 0 01-.328-.424 7.028 7.028 0 01-.272-.512l-.031-.048-.024-.048c-.65.767-1.466 1.151-2.456 1.151-.704 0-1.264-.2-1.688-.6-.424-.4-.632-.936-.632-1.608 0-.712.256-1.288.768-1.728.512-.44 1.2-.656 2.048-.656.28 0 .568.024.864.064.296.048.6.112.92.2v-.656c0-.68-.144-1.16-.424-1.432-.288-.272-.776-.408-1.47-.408-.32 0-.648.04-.984.112-.336.08-.664.184-.984.32-.144.063-.256.104-.312.128-.056.016-.096.024-.128.024-.112 0-.168-.08-.168-.248v-.384c0-.128.016-.224.056-.28.04-.064.112-.128.216-.192.32-.168.704-.304 1.144-.416.448-.112.912-.168 1.4-.168 1.072 0 1.856.24 2.36.728.496.488.752 1.224.752 2.208v2.911zm-3.52 1.328c.272 0 .552-.048.848-.152.296-.104.536-.272.728-.496.112-.136.2-.288.248-.456.048-.168.08-.368.08-.592v-.288a6.568 6.568 0 00-.744-.16 7.172 7.172 0 00-.792-.056c-.568 0-.984.112-1.264.328-.288.216-.424.528-.424.936 0 .384.104.672.32.864.208.2.504.296.888.296l.112-.024zm6.695.864c-.144 0-.24-.024-.312-.08-.072-.048-.136-.16-.184-.304L7.398 5.552c-.048-.16-.08-.264-.08-.328 0-.128.064-.2.192-.2h.784c.152 0 .256.024.32.08.072.048.128.16.176.304l1.832 7.224 1.704-7.224c.04-.16.104-.256.176-.304.072-.056.176-.08.328-.08h.64c.152 0 .256.024.328.08.072.048.136.16.176.304l1.728 7.312 1.888-7.312c.048-.16.112-.256.176-.304.072-.056.176-.08.32-.08h.744c.128 0 .2.064.2.2 0 .04-.008.08-.016.128-.008.048-.024.112-.048.2L14.297 11.8c-.048.16-.112.256-.184.304-.072.056-.168.08-.312.08h-.688c-.152 0-.256-.024-.328-.08-.072-.048-.136-.16-.176-.304L10.87 4.720 9.135 11.784c-.04.16-.104.256-.176.304-.072.056-.176.08-.328.08h-.688zm10.708.272c-.424 0-.84-.048-1.248-.144-.408-.096-.728-.208-.952-.336-.128-.072-.216-.152-.256-.232-.04-.08-.064-.168-.064-.264v-.4c0-.168.064-.248.184-.248.048 0 .096.008.152.032.056.016.144.048.248.08.336.144.688.256 1.056.328.376.08.744.112 1.112.112.592 0 1.048-.104 1.376-.312.336-.208.496-.504.496-.888 0-.264-.08-.488-.248-.672-.168-.184-.48-.368-.936-.544l-1.344-.424c-.68-.216-1.176-.536-1.48-.96-.312-.424-.464-.896-.464-1.424 0-.408.088-.768.256-1.08.176-.312.4-.576.688-.792.288-.216.624-.384 1.008-.496.384-.112.784-.168 1.2-.168.184 0 .376.008.568.032.192.016.376.048.552.08.168.04.328.08.472.128.152.048.272.096.36.152.128.08.224.168.272.256.056.088.08.192.08.312v.368c0 .168-.064.256-.184.256-.064 0-.168-.024-.312-.08-.296-.136-.624-.2-.992-.2-.536 0-.952.088-1.248.272-.296.184-.448.456-.448.808 0 .264.088.496.272.688.184.192.52.392 1.008.6l1.32.424c.672.216 1.152.52 1.44.912.288.392.432.832.432 1.328 0 .416-.08.8-.24 1.128-.16.336-.384.624-.672.864-.288.24-.632.424-1.024.552-.408.128-.848.2-1.328.2z"/>
      </svg>
    </div>
  ),
  'express': (
    <div className="w-full h-full group">
      <svg viewBox="0 0 24 24" className="w-full h-full fill-slate-600 group-hover:fill-slate-800 transition-all duration-300">
        <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9-.666L18.624 10.5l3.975-5.856a1.526 1.526 0 011.895.665l-5.036 6.753L24 18.588z"/>
        <path d="M.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957c-2.826 1.114-6.287-.122-7.436-2.693L.002 11.576z"/>
        <path d="M1.116 11.504h10.673c.186-2.042-.599-3.597-2.42-4.56-2.875-1.516-6.728-.387-8.253 4.56z"/>
      </svg>
    </div>
  ),
  'expo': (
    <div className="w-full h-full group">
      <svg viewBox="0 0 24 24" className="w-full h-full fill-slate-600 group-hover:fill-slate-900 transition-all duration-300">
        <path d="M12 2L9.09 8.26l4.91 4.74 4.91-4.74L16 2z"/>
        <path d="M12 22c1.1 0 2.1-.9 2.1-2.1 0-1.1-.9-2.1-2.1-2.1s-2.1.9-2.1 2.1c0 1.2 1 2.1 2.1 2.1zm0-16.5c-6.6 0-12 5.4-12 12 0 6.6 5.4 12 12 12s12-5.4 12-12c0-6.6-5.4-12-12-12zm0 21.5c-5.2 0-9.5-4.3-9.5-9.5S6.8 8 12 8s9.5 4.3 9.5 9.5S17.2 27 12 27z"/>
      </svg>
    </div>
  ),
  'ruby': (
    <div className="w-full h-full group">
      <svg viewBox="0 0 24 24" className="w-full h-full fill-slate-600 group-hover:fill-red-600 transition-all duration-300">
        <path d="M20.156.083c3.033.525 3.893 2.598 3.829 4.77L24 4.822 22.635 22.71 4.89 23.926h.016C2.725 23.926 1.84 23.041 2.074 21.577L3.31 4.776l-.028-.01C3.348 2.64 4.224 1.78 6.401 1.77L20.156.084z"/>
        <path d="M8.109 18.262l.135-2.391L12.27 6.756l2.03.022-4.132 11.484zm5.264-11.029l2.988 9.825 2.244-.027-2.868-9.797L13.373 7.233z"/>
      </svg>
    </div>
  ),
  'ruby on rails': (
    <div className="w-full h-full group">
      <svg viewBox="0 0 24 24" className="w-full h-full fill-slate-600 group-hover:fill-red-700 transition-all duration-300">
        <path d="M7.523 7.781c-.2-.1-.4-.1-.6 0l-1.8.9c-.2.1-.3.3-.3.5v1.8c0 .2.1.4.3.5l1.8.9c.2.1.4.1.6 0l1.8-.9c.2-.1.3-.3.3-.5v-1.8c0-.2-.1-.4-.3-.5l-1.8-.9zm8.954 0c-.2-.1-.4-.1-.6 0l-1.8.9c-.2.1-.3.3-.3.5v1.8c0 .2.1.4.3.5l1.8.9c.2.1.4.1.6 0l1.8-.9c.2-.1.3-.3.3-.5v-1.8c0-.2-.1-.4-.3-.5l-1.8-.9z"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-7 10c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7-7-3.14-7-7z"/>
      </svg>
    </div>
  ),
  'gcp': (
    <div className="w-full h-full group">
      <svg viewBox="0 0 24 24" className="w-full h-full fill-slate-600 group-hover:fill-blue-500 transition-all duration-300">
        <path d="M12.19 2.38a9.344 9.344 0 014.463 1.16l-1.855 1.854a6.587 6.587 0 00-5.215-.255 6.588 6.588 0 00-4.394 4.394 6.587 6.587 0 00.255 5.215L3.54 16.593A9.324 9.324 0 012.38 12.19 9.62 9.62 0 0112.19 2.38zM20.46 7.407l1.854-1.855A9.324 9.324 0 0123.62 12.19a9.62 9.62 0 01-9.81 9.81 9.344 9.344 0 01-4.463-1.16l1.855-1.854a6.587 6.587 0 005.215.255 6.588 6.588 0 004.394-4.394 6.587 6.587 0 00-.255-5.215l-.096-.225zM7.407 3.54A9.324 9.324 0 0112.19 2.38a9.62 9.62 0 019.81 9.81 9.344 9.344 0 01-1.16 4.463l-1.854-1.855a6.587 6.587 0 00.255-5.215 6.588 6.588 0 00-4.394-4.394 6.587 6.587 0 00-5.215.255L7.407 3.54z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    </div>
  ),
  'supabase': (
    <div className="w-full h-full group">
      <svg viewBox="0 0 24 24" className="w-full h-full fill-slate-600 group-hover:fill-green-600 transition-all duration-300">
        <path d="M12.001 0C18.627 0 24.001 5.373 24.001 12c0 6.627-5.374 12-12 12C5.375 24 .001 18.627.001 12 .001 5.373 5.375 0 12.001 0zm-1.592 7.506l-4.286 6.429c-.429.643.071 1.5.857 1.5h6.857c.5 0 .929-.357 1-.857l.857-8.143c.071-.714-.714-1.214-1.286-.786l-3.999 2.857zm3.184 8.988l4.286-6.429c.429-.643-.071-1.5-.857-1.5H10.165c-.5 0-.929.357-1 .857L8.308 17.565c-.071.714.714 1.214 1.286.786l3.999-2.857z"/>
      </svg>
    </div>
  ),
  'shopify': (
    <div className="w-full h-full group">
      <svg viewBox="0 0 24 24" className="w-full h-full fill-slate-600 group-hover:fill-green-700 transition-all duration-300">
        <path d="M15.337 2.368c-.332-.024-.672 0-1.008.072-.048 0-.12.024-.192.048-.648-1.176-1.584-1.68-2.664-1.68h-.096c-.504-.72-1.128-.984-1.656-.984-4.2 0-6.192 5.256-6.84 7.92-.072.12-.096.24-.144.36-1.032.336-1.752.552-1.776.576-.528.168-.552.192-.624.696L.001 21.264l11.304 2.088L23.28 21.96l-3.192-15.672c-.072-.36-.264-.456-.648-.48-.048 0-1.584-.144-4.104-3.44zm-1.968.96c-.192.048-.384.12-.6.168l.024-.048c.168-.528.336-1.056.576-1.32zm-1.176-1.44c.144 0 .264.048.384.168-.288.336-.456.888-.648 1.512-.432.144-.864.288-1.32.432.384-1.248.936-2.112 1.584-2.112zM9.193 4.416c.072 0 .144 0 .216.024-.432 1.464-.936 3.12-1.176 4.704L6.025 8.424c.6-2.112 1.8-4.008 3.168-4.008zm7.8 14.832c-.216 2.424-2.04 3.288-4.512 3.432-2.016.12-2.976-.36-2.976-1.176 0-1.32 1.368-1.584 3.504-1.68 1.2-.072 1.872-.168 1.872-.168V17.28c0-.84.36-1.944 1.344-1.944.864 0 .984.912.984 1.584v1.32c0 .336-.072.72-.216 1.008zM19.849 8.76c0 1.8-.96 4.056-2.736 5.4v-3.336c0-1.32-.384-2.304-1.128-2.976.288-1.368.72-2.448 1.224-2.448.744 0 1.64 1.44 1.64 3.36z"/>
      </svg>
    </div>
  )
}

const TechIcon: React.FC<TechIconProps> = ({ name, className = "" }) => {
  const iconPath = iconMapping[name.toLowerCase()]
  const [imageError, setImageError] = React.useState(false)
  
  if (!iconPath) {
    console.warn(`Icon "${name}" not found in mapping`)
    return null
  }

  const iconUrl = `https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/${iconPath}.svg`
  const fallbackIcon = fallbackIcons[name.toLowerCase()]
  
  // Force fallback for problematic icons
  const forcesFallback = ['express', 'expo'].includes(name.toLowerCase())

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <div className={`flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 ${className}`}>
      <div className="w-16 h-16 sm:w-24 sm:h-24">
        {(imageError || forcesFallback) && fallbackIcon ? (
          fallbackIcon
        ) : (
          <img
            src={iconUrl}
            alt={`${name} icon`}
            className="w-full h-full object-contain filter grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-300"
            loading="lazy"
            onError={handleImageError}
          />
        )}
      </div>
      <p className="mt-4 text-slate-400 font-semibold tracking-wide text-lg sm:text-xl text-center">
        {name}
      </p>
    </div>
  )
}

export default TechIcon