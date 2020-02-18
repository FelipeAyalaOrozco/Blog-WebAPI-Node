import { Router } from 'express'
import jwt from 'jsonwebtoken'
import postRepository from '../repositories/postRepository'

export const postController = Router()