import CryptoJS from 'crypto-js'

const SALT = CryptoJS.lib.WordArray.random(128 / 8)

export function hashPassword(password: string): string {
  return CryptoJS.SHA256(password + SALT).toString()
}
