import { useForm } from 'react-hook-form'
import React from 'react'
import {
  FormErrorMessage,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Textarea
} from '@chakra-ui/react'

function createData(heading, id, placeholder, registerProps) {
  return { heading, id, placeholder, registerProps }
}

export default function HookForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm()

  const data = [
    createData(
      'Email',
      'email',
      'your-email@gmail.com',
      {
        required: true,
        pattern: {
          value: /^\S+@\S+$/i,
          message: 'Please enter a valid email'
        }
      },
      errors.email
    ),
    createData(
      'Name',
      'name',
      'Jane Doe',
      {
        required: 'Please enter a valid name'
      },
      errors.name
    )
  ]

  function onSubmit(values) {
    return new Promise(resolve => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
      }, 3000)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {data.map(element => {
        return (
          <FormControl isInvalid={errors[element.id]}>
            <Heading my={3} as="h4" size="md">
              {element.heading}
            </Heading>
            <Input
              id={element.id}
              borderRadius={3}
              borderColor={useColorModeValue('gray.400', 'inherit')}
              placeholder={element.placeholder}
              size="lg"
              {...register(element.id, element.registerProps)}
            />
            <FormErrorMessage>
              {errors[element.id] && errors[element.id].message}
            </FormErrorMessage>
          </FormControl>
        )
      })}
      <FormControl isInvalid={errors.message}>
        <Heading my={3} as="h4" size="md">
          Message
        </Heading>
        <Textarea
          id={'message'}
          borderRadius={3}
          borderColor={useColorModeValue('gray.400', 'inherit')}
          resize="none"
          placeholder="Hi! Let's connect!"
          h="195px"
          {...register('message', {
            required: 'Please enter a message'
          })}
        />
        <FormErrorMessage>
          {errors.message && errors.message.message}
        </FormErrorMessage>
      </FormControl>

      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  )
}
