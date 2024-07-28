"use client"

import { formatAmount } from "@/lib/utils";
import { useCallback } from "react";
import CountUp from "react-countup"

const AnimatedCounter = ({amount} : { amount: number }) => {
  const formatFn = useCallback((value: number) => {
    return formatAmount(value)
  },[formatAmount],);

  return (
    <CountUp end={amount} duration={ 1 } decimals={2} formattingFn={formatFn} preserveValue redraw={false}/>
  )
}

export default AnimatedCounter