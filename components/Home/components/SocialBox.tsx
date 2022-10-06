import Image, { StaticImageData } from 'next/image';
import React, { FC } from 'react'
import { IconType } from 'react-icons';
import Box from '../../../kit/Box'
import { Flex } from '../../../kit/Layout'
import { ThirdTitle } from '../../../kit/Text';
import { SocialLink } from '../styles';

interface SocialI {
  name: string;
  link: string
  icon: IconType
  qrCode: StaticImageData
}

interface SocialBoxI {
  socials: Array<SocialI>
}

const SocialBox:FC<SocialBoxI> = ({socials}) => {
  return (
    <Flex justify='between'>
      {socials.map( social => {
        const {icon, name, qrCode, link} = social
        const Icon = icon
        return (
          <Box size='1/2' key={name} withShadow>
            <Flex direction='column' align='center' justify='center'>
            <ThirdTitle mBottom='10px'><Icon /> {name}</ThirdTitle>
            <Image src={qrCode} alt={`${name} qrCode`} width={100} height={100}/>
              <SocialLink href={link} target={'_blank'}>
                {`Scrivici su ${name}`}
              </SocialLink>
            </Flex>
          </Box>
        )}
      )}
    </Flex>
  )
}

export default SocialBox