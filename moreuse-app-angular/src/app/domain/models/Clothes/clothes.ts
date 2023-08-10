export class Clothes {
  clothes!: Clothe[]
}

export class Clothe {
  _id!: string
  name!: string
  target!: string
  gender!: string
  price!: number
  sellerId!: string
  image!: string
  description!: string
  status!: number
  isRemoved!: boolean
  createdAt!: string
  updatedAt!: string
  __v!: string
}
