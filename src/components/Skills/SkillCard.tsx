import React, { useMemo } from 'react'

type SkillCardProps = {
  title: string
  level: number
}

export const SkillCard = ({ title, level }: SkillCardProps) => {
  const levelPoint = useMemo(() => level + '%', [])
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <div className='shadow bg-green-100 mt-2 mb-4'>
        <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{ width: levelPoint }}>
          {levelPoint}
        </div>
      </div>
    </React.Fragment>
  )
}
