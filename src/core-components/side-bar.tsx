import Text from "../components/text"
import Button from "../components/button"
import TextInput from "../components/text-input"
import TimeSelect from "../components/time-select"
import Container from "../components/container"
import DatePicker from "../components/date-picker"
import UserSquare from "../assets/icons/UserSquare.svg?react"
import CalendarBlank from "../assets/icons/CalendarBlank.svg?react"
import type React from "react"
import { cx } from "class-variance-authority"

type SideBarProps = React.ComponentProps<"div"> 

export default function SideBar({
    className,
    ...props
}: SideBarProps) {
    return (
        <Container className={cx("flex flex-col gap-2 py-20", className)}
        {...props}
        >
            <Text variant="title-lg" className="text-gray-100">
            Agende um atendimento
            </Text>

            <Text variant="text-sm" className="text-gray-300">
            Selecione data, horário e informe o nome do cliente para criar o agendamento
            </Text>

            <Text variant="title-md" className="text-gray-200 mt-4">
            Data
            </Text>

            <DatePicker className="w-full" icon={CalendarBlank}>
            </DatePicker>

            <div className="flex flex-col my-6">
            <Text variant="title-md" className="text-gray-200 ">
            Horários
            </Text>

            <Text variant="text-sm" className="text-gray-300 my-3">
                Manhã
            </Text>

            <div className="flex gap-2">
                <TimeSelect>09:00</TimeSelect>
                <TimeSelect>10:00</TimeSelect>
                <TimeSelect>11:00</TimeSelect>
                <TimeSelect>12:00</TimeSelect>
            </div>

            <Text variant="text-sm" className="text-gray-300 my-3">
                Tarde
            </Text>

            <div className="flex gap-2 flex-wrap">
                <TimeSelect className="flex-1">13:00</TimeSelect>
                <TimeSelect className="flex-1">14:00</TimeSelect>
                <TimeSelect className="flex-1">15:00</TimeSelect>
                <TimeSelect className="flex-1">16:00</TimeSelect>
                <TimeSelect >17:00</TimeSelect>
                <TimeSelect >18:00</TimeSelect>
            </div>

            <Text variant="text-sm" className="text-gray-300 my-3">
                Noite
            </Text>

            <div className="flex gap-2">
                <TimeSelect> 19:00</TimeSelect>
                <TimeSelect> 20:00</TimeSelect>
                <TimeSelect> 21:00</TimeSelect>
            </div>
            </div>

            <Text variant="title-md" className="text-gray-200 mb-2">
            Cliente
            </Text>

            <TextInput placeholder="Helena Souza" icon={UserSquare}>
            </TextInput>

            <Button className="mt-6">
            AGENDAR
            </Button>
        </Container>
    )
}