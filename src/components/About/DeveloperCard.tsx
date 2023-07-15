import { ArrowRightIcon, CodeBracketIcon } from '@/components'

type CardUtilProps = {
  title: string
  desc: string
}

export const DeveloperCard = ({ title, desc }: CardUtilProps) => {
  return (
    <div className='md:w-1/3 p-4'>
      <div className='bg-gray-200 rounded-lg p-8'>
        <div className='flex items-center mb-3 px-1 py-1'>
          <div className='bg-green-500 text-white rounded-full px-1 py-1'>
            <CodeBracketIcon className='h-4 w-4 text-white' />
          </div>
          <h2 className='text-gray-900 text-lg font-medium ml-2'>{title}</h2>
        </div>
        <div>
          <p>{desc}</p>
          <a href='#' className='flex mt-3 text-green-500 items-center'>
            もっと見る
            <ArrowRightIcon className='h-5 w-5' />
          </a>
        </div>
      </div>
    </div>
  )
}
