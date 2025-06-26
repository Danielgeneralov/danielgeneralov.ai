import Image from 'next/image'
import { cn } from '@/lib/utils'

function CustomLink(props: any) {
  const href = props.href

  if (href.startsWith('/')) {
    return (
      <a
        href={href}
        {...props}
        className="text-blue-600 hover:text-blue-700 underline underline-offset-2"
      />
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} className="text-blue-600 hover:text-blue-700 underline underline-offset-2" />
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      className="text-blue-600 hover:text-blue-700 underline underline-offset-2"
    />
  )
}

function CustomImage(props: any) {
  return (
    <div className="my-8">
      <Image
        {...props}
        alt={props.alt || ''}
        className="rounded-lg shadow-sm"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
      />
      {props.alt && (
        <p className="text-center text-sm text-gray-600 mt-2 italic">
          {props.alt}
        </p>
      )}
    </div>
  )
}

function CustomCode({ className, children, ...props }: any) {
  return (
    <code
      className={cn(
        'relative rounded px-1.5 py-1 font-mono text-sm',
        'bg-gray-100 text-gray-900',
        className
      )}
      {...props}
    >
      {children}
    </code>
  )
}

function CustomPre({ children, ...props }: any) {
  return (
    <pre
      className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-gray-950 py-4 text-white"
      {...props}
    >
      {children}
    </pre>
  )
}

function CustomBlockquote({ children, ...props }: any) {
  return (
    <blockquote
      className="border-l-4 border-blue-500 bg-blue-50 p-4 my-6 italic"
      {...props}
    >
      {children}
    </blockquote>
  )
}

function CustomH1({ children, ...props }: any) {
  return (
    <h1
      className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-6"
      {...props}
    >
      {children}
    </h1>
  )
}

function CustomH2({ children, ...props }: any) {
  return (
    <h2
      className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-12 mb-4"
      {...props}
    >
      {children}
    </h2>
  )
}

function CustomH3({ children, ...props }: any) {
  return (
    <h3
      className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8 mb-4"
      {...props}
    >
      {children}
    </h3>
  )
}

function CustomH4({ children, ...props }: any) {
  return (
    <h4
      className="scroll-m-20 text-xl font-semibold tracking-tight mt-6 mb-3"
      {...props}
    >
      {children}
    </h4>
  )
}

export const MDXComponents = {
  h1: CustomH1,
  h2: CustomH2,
  h3: CustomH3,
  h4: CustomH4,
  a: CustomLink,
  img: CustomImage,
  Image: CustomImage,
  code: CustomCode,
  pre: CustomPre,
  blockquote: CustomBlockquote,
} 