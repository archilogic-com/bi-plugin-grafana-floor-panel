import React, { useEffect, createRef } from 'react'
import { FloorPlanEngine } from '@archilogic/floor-plan-sdk'
import './FloorPlan.css'

interface FloorOptions {
  id: string
  token: string
  startupOptions?: any
  onLoad?: (floorPlan: FloorPlanEngine) => void
}

const FloorPanel: React.FC<FloorOptions> = props => {
  const containerRef = createRef<HTMLDivElement>()

  const tokenOptions = {
    publishableAccessToken: props.token
  }

  const initFloorPlan = () => {
    if (containerRef.current) {
      const fpe = new FloorPlanEngine({
        container: containerRef.current,
        options: props.startupOptions
      })
      fpe.loadScene(props.id, tokenOptions).then(() => {
        if (props.onLoad) {
          props.onLoad(fpe)
        }
      })
    }
  }

  useEffect(() => {
    initFloorPlan()
  }, [props.id, props.token])

  initFloorPlan()

  return (
    <div className="plan-wrapper">
      <div ref={containerRef} className="plan-container"></div>
    </div>
  )
}

export default FloorPanel
