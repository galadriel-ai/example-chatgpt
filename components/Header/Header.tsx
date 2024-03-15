'use client'

import {useCallback, useState} from 'react'
import {HamburgerMenuIcon} from '@radix-ui/react-icons'
import {Avatar, Flex, Heading, IconButton, Tooltip} from '@radix-ui/themes'
import cs from 'classnames'
import NextLink from 'next/link'
import {FaGithub} from 'react-icons/fa'
import {useTheme} from '../Themes'

export const Header = () => {
  const {theme, setTheme} = useTheme()
  const [, setShow] = useState(false)

  const toggleNavBar = useCallback(() => {
    setShow((state) => !state)
  }, [])

  return (
    <header
      className={cs('block shadow-sm sticky top-0 dark:shadow-gray-500 py-3 px-4 z-20')}
      style={{backgroundColor: 'var(--background-color)'}}
    >
      <Flex align="center" gap="3">
        <NextLink href="/">
          <Heading as="h2" size="9" style={{maxWidth: 1200, fontFamily: "PPNeueBit-Bold"}}>
            Galadriel
          </Heading>
        </NextLink>
        <div
          style={{fontFamily: "PPNeueBit-Bold"}}
          className="text-3xl"
        >
          on-chain ChatGPT (contract:
          <a
            href={`https://explorer.galadriel.com/address/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}`}
            target="_blank"
            className={"pl-2 underline"}
          >
            {process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}
          </a>
          )
        </div>
        <Flex align="center" gap="3" className="ml-auto">
          <Avatar
            color="gray"
            size="2"
            radius="full"
            fallback={
              <a href="https://github.com/galadriel-ai/example-chatgpt" target={"_blank"}>
                <FaGithub/>
              </a>
            }
          />
        </Flex>
        <Tooltip content="Navigation">
          <IconButton
            size="3"
            variant="ghost"
            color="gray"
            className="md:hidden"
            onClick={toggleNavBar}
          >
            <HamburgerMenuIcon width="16" height="16"/>
          </IconButton>
        </Tooltip>
      </Flex>
    </header>
  )
}
