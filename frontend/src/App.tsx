// import { useState } from 'react'
import './index.css'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Search, Settings, MoreHorizontal } from 'lucide-react'

function App() {
  return (
    <div className="flex flex-col h-screen p-4 bg-transparent text-gray-800">
      <div className="flex justify-center space-x-2 mb-4">
        <Button variant="secondary" size="sm" className="rounded-full px-4">Text</Button>
        <Button variant="ghost" size="sm" className="rounded-full px-4">Images</Button>
        <Button variant="ghost" size="sm" className="rounded-full px-4">Files</Button>
      </div>

      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
        <Input
          type="search"
          placeholder="Search clipboard..."
          className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 bg-white/80 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="flex-grow overflow-y-auto space-y-2">
        <div className="p-3 bg-white/70 rounded-md shadow-sm">Clipboard Item 1</div>
        <div className="p-3 bg-white/70 rounded-md shadow-sm">Clipboard Item 2</div>
        <div className="p-3 bg-white/70 rounded-md shadow-sm">Clipboard Item 3</div>
        <div className="p-3 bg-white/70 rounded-md shadow-sm">Clipboard Item 4</div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
        <MoreHorizontal className="h-5 w-5 text-gray-500" />
        <Button variant="ghost" size="icon">
          ?
        </Button>
      </div>
    </div>
  )
}

export default App
