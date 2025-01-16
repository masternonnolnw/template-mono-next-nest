export interface OkResult<T> {
  isOk: true
  isErr: false
  value: T | undefined
}

export interface ErrResult {
  isOk: false
  isErr: true
  err: string | undefined
}

export type Result<T> = OkResult<T> | ErrResult

export const ok = <T>(value: T | undefined): Result<T> => {
  return {
    isOk: true,
    isErr: false,
    value,
  }
}

export const err = <T>(err?: string): Result<T> => {
  return {
    isOk: false,
    isErr: true,
    err,
  }
}

export const makeResponse = <T>(result: Result<T>) => {
  if (result.isOk) {
    return {
      status: 200,
      body: result.value,
    } as const
  } else if (result.isErr) {
    return {
      status: 422,
      body: {
        error: result.err,
      },
    } as const
  }
}
