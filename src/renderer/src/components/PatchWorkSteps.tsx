import React, { useState, useEffect } from 'react'
import { Popover, Steps, Button } from 'antd'

interface StepsProps {
  isPatching: boolean
  isPatchingSetter: void
}
export const PatchWorkSteps = (props: StepsProps): JSX.Element => {
  const [currentStep, setcurrentStep] = useState<number>(0)
  const items: { title: string; description: string }[] = [
    {
      title: 'Apps Scanning',
      description: 0 < currentStep ? 'Scanning Completed' : ''
    },
    {
      title: 'looking for Vulnerabilities',
      description: 1 < currentStep ? '19 Vulnerabilities Found' : ''
    },
    {
      title: 'Fixing',
      description: 2 < currentStep ? 'Vulnerabilities Fixed' : ''
    },
    {
      title: 'App Updating',
      description: 3 < currentStep ? 'App Updated Successfully' : ''
    },
    {
      title: 'Successfully Secured and Updated',
      description: ''
    }
  ]
  const handlePatching = () => {
    if (props.isPatching) {
      const intervalId = setInterval(() => {
        if (currentStep < 4) {
          setcurrentStep((prevStep) => prevStep + 1)
        } else {
          props.isPatchingSetter()
          clearInterval(intervalId)
        }
      }, 2000)

      return () => {
        clearInterval(intervalId)
      }
    }
  }
  useEffect(() => {
    if (props.isPatching) {
      const intervalId = setInterval(() => {
        if (currentStep < 4) {
          setcurrentStep((prevStep) => prevStep + 1)
        } else {
          props.isPatchingSetter()
          clearInterval(intervalId)
        }
      }, 2000)
    }
  }, [props.isPatching, currentStep])
  //   alert(isPatching)
  return (
    <div>
      <Steps current={currentStep} items={items} direction="vertical" />
    </div>
  )
}

export default PatchWorkSteps
