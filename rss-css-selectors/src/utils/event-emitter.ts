import { Callback } from '../types/type'

class EventEmitter {
  private events = new Map<string, Callback[]>()

  public subscribe(eventName: string, ...eventCallbacks: Callback[]): void {
    let callbacks = this.events.get(eventName)

    if (!callbacks) {
      this.events.set(eventName, (callbacks = []))
    }

    callbacks.push(...eventCallbacks)
  }

  public unsubscribe(eventName: string, eventCallback?: Callback): boolean {
    if (!eventCallback) {
      return this.events.delete(eventName)
    }

    const callbacks = this.events.get(eventName)

    if (!callbacks) {
      return false
    }

    const index = callbacks.indexOf(eventCallback)

    if (index < 0) {
      return false
    }

    callbacks.splice(index, 1)

    if (callbacks.length === 0) {
      this.events.delete(eventName)
    }

    return true
  }

  public emit<T>(eventName: string, args: T): boolean {
    const callbacks = this.events.get(eventName)

    if (!callbacks) {
      return false
    }

    callbacks.forEach((handler) => {
      try {
        handler(args)
      } catch (err) {
        console.error(err)
      }
    })

    return true
  }
}

export const emitter = new EventEmitter()
