'use client'

import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import clsx from 'clsx'
import React, { Suspense } from 'react'

/*3D model configuration and rendering 가운데 사람 3D 만드는 과정에서 만든 파일 --> 추후에 삭제 확인하기*/

const RenderModel = ({ children, className }) => {
  return (
    <Canvas className={clsx('w-screen h-screen -z-10 relative', className)}>
      <Suspense fallback={null}>{children}</Suspense>
      <Environment preset="dawn" />
    </Canvas>
  )
}

export default RenderModel
