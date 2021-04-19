import { ID } from '../types/types'
import IImage from './IImage'

export interface IProduct {
	id: ID
	title: string
	price: number
	category: any
	description?: string
	brand?: string
	images: Array<IImage>
}
