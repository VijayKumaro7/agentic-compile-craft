import { describe, it, expect } from 'vitest'
import { reducer } from './use-toast'
import type { ToastProps } from '@/components/ui/toast'

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
}

describe('toast reducer', () => {
  it('adds a toast', () => {
    const initial = { toasts: [] as ToasterToast[] }
    const toast = { id: '1', title: 'hi', open: true }
    const state = reducer(initial, { type: 'ADD_TOAST', toast })
    expect(state.toasts).toEqual([toast])
  })

  it('updates a toast', () => {
    const initial = { toasts: [{ id: '1', title: 'first', open: true }] }
    const state = reducer(initial, { type: 'UPDATE_TOAST', toast: { id: '1', title: 'updated' } })
    expect(state.toasts[0]).toMatchObject({ id: '1', title: 'updated', open: true })
  })

  it('dismisses a toast', () => {
    const initial = { toasts: [{ id: '1', title: 'x', open: true }] }
    const state = reducer(initial, { type: 'DISMISS_TOAST', toastId: '1' })
    expect(state.toasts[0].open).toBe(false)
  })

  it('dismisses all toasts when id not provided', () => {
    const initial = {
      toasts: [
        { id: '1', open: true },
        { id: '2', open: true }
      ]
    }
    const state = reducer(initial, { type: 'DISMISS_TOAST' })
    expect(state.toasts.every(t => !t.open)).toBe(true)
  })

  it('removes a toast', () => {
    const initial = { toasts: [
      { id: '1', open: false },
      { id: '2', open: true }
    ] }
    const state = reducer(initial, { type: 'REMOVE_TOAST', toastId: '1' })
    expect(state.toasts).toEqual([{ id: '2', open: true }])
  })
})
