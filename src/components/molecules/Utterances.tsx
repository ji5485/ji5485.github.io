import React, { createRef, FunctionComponent, useEffect } from 'react'

const src = 'https://utteranc.es/client.js'
const repo = 'ji5485/ji5485.github.io'

const Utterances: FunctionComponent = function () {
  const element = createRef<HTMLDivElement>()

  useEffect(() => {
    if (element.current === null) return

    const utterances = document.createElement('script')
    const initialMode = window.document.body.classList.contains('dark')
      ? 'dark'
      : 'light'

    const attributes = {
      src,
      repo,
      'issue-term': 'pathname',
      label: 'utterances-comment',
      theme: `github-${initialMode}`,
      crossorigin: 'anonymous',
      async: true,
    }

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, String(value))
    })

    element.current.appendChild(utterances)

    const changeUtterancesMode = (mode: string) => {
      const utterances = document.querySelector<HTMLIFrameElement>(
        'iframe.utterances-frame',
      )

      if (utterances === null || utterances.contentWindow === null) return

      const message = {
        type: 'set-theme',
        theme: `github-${mode}`,
      }

      utterances.contentWindow.postMessage(message, 'https://utteranc.es')
    }

    const observer = new MutationObserver(() => {
      const currentMode = window.document.body.classList.contains('dark')
        ? 'dark'
        : 'light'
      changeUtterancesMode(currentMode)
    })

    observer.observe(window.document.body, {
      attributes: true,
      attributeFilter: ['class'],
      childList: false,
      characterData: false,
    })

    return () => observer.disconnect()
  }, [])

  return <div ref={element} />
}

export default Utterances
