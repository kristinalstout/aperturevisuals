import React, {useState} from 'react'
import {groq} from '@sanity/groq'
import {client} from '../client'

export async function getPos() {
    const posts = await client.fetch('*[_type == "post"]')
    return posts
  }