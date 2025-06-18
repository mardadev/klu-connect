import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import {
  Search,
  Send,
  Phone,
  Video,
  MoreVertical,
  Paperclip,
  Smile,
  Users,
  Plus,
  Pin,
  Archive,
  Star,
  Clock
} from 'lucide-react';
import AppLayout from '@/components/Layout/AppLayout';
import PageContainer from '@/components/ui/page-container';
import SectionCard from '@/components/ui/section-card';

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Proje Grubu',
      lastMessage: 'Toplantı için hazırlıkları tamamladık mı?',
      time: '10:30',
      unread: 3,
      type: 'group',
      avatar: '',
      online: true,
      participants: 5
    },
    {
      id: 2,
      name: 'Dr. Ayşe Demir',
      lastMessage: 'Proje teslim tarihi için ek süre verildi',
      time: '09:45',
      unread: 1,
      type: 'individual',
      avatar: '',
      online: true
    },
    {
      id: 3,
      name: 'Ahmet Yılmaz',
      lastMessage: 'Ders notlarını paylaştığın için teşekkürler',
      time: 'Dün',
      unread: 0,
      type: 'individual',
      avatar: '',
      online: false
    },
    {
      id: 4,
      name: 'CSE401 - Yapay Zeka',
      lastMessage: 'Yeni ödev yüklendi: Neural Networks',
      time: '2 gün önce',
      unread: 0,
      type: 'course',
      avatar: '',
      online: false,
      participants: 45
    },
    {
      id: 5,
      name: 'Zehra Çelik',
      lastMessage: 'Laboratuvar raporunu birlikte hazırlayalım',
      time: '3 gün önce',
      unread: 0,
      type: 'individual',
      avatar: '',
      online: true
    }
  ];

  const messages = {
    1: [
      {
        id: 1,
        sender: 'Ahmet',
        content: 'Toplantı için hazırlıkları tamamladık mı?',
        time: '10:30',
        isSelf: false,
        avatar: 'A'
      },
      {
        id: 2,
        sender: 'Sen',
        content: 'Evet, sunumu da hazırladım. Yarın 14:00\'da buluşalım.',
        time: '10:32',
        isSelf: true
      },
      {
        id: 3,
        sender: 'Zehra',
        content: 'Ben de projede kullanacağımız verileri topladım. Grafikleri de çıkardım.',
        time: '10:35',
        isSelf: false,
        avatar: 'Z'
      },
      {
        id: 4,
        sender: 'Sen',
        content: 'Harika! O zaman yarın her şeyi bir araya getirip final halini verelim.',
        time: '10:40',
        isSelf: true
      },
      {
        id: 5,
        sender: 'Mehmet',
        content: 'Demo için gerekli dosyaları da hazırladım. Drive\'a yükledim.',
        time: '10:45',
        isSelf: false,
        avatar: 'M'
      }
    ],
    2: [
      {
        id: 1,
        sender: 'Dr. Ayşe Demir',
        content: 'Proje teslim tarihi için ek süre verildi. Yeni tarih 25 Ocak.',
        time: '09:45',
        isSelf: false,
        avatar: 'D'
      }
    ]
  };

  const currentChat = conversations.find(c => c.id === selectedChat);
  const currentMessages = messages[selectedChat] || [];

  const handleSendMessage = () => {
    if (!message.trim()) return;
    // Here you would typically send the message to your backend
    setMessage('');
  };

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getChatIcon = (type: string) => {
    switch (type) {
      case 'group':
        return <Users className="w-5 h-5" />;
      case 'course':
        return <div className="w-5 h-5 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">C</div>;
      default:
        return null;
    }
  };

  return (
    <AppLayout showSidebar title="Mesajlar">
      <div className="h-[calc(100vh-4rem)] flex">
        {/* Conversations Sidebar */}
        <div className="w-80 border-r border-slate-200 bg-white flex flex-col">
          {/* Search Header */}
          <div className="p-4 border-b border-slate-200">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">Mesajlar</h2>
                <Button size="sm" className="gap-2">
                  <Plus className="w-4 h-4" />
                  Yeni
                </Button>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input
                  placeholder="Sohbet ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Conversations List */}
          <ScrollArea className="flex-1">
            <div className="p-2 space-y-1">
              {filteredConversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedChat(conversation.id)}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-200 hover:bg-slate-50 ${
                    selectedChat === conversation.id 
                      ? 'bg-blue-50 border border-blue-200 shadow-sm' 
                      : 'hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={conversation.avatar} />
                        <AvatarFallback className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold">
                          {conversation.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      {conversation.type !== 'individual' && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center">
                          {getChatIcon(conversation.type)}
                        </div>
                      )}
                      {conversation.online && conversation.type === 'individual' && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className={`font-semibold truncate ${
                          selectedChat === conversation.id ? 'text-blue-900' : 'text-slate-900'
                        }`}>
                          {conversation.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-slate-500">{conversation.time}</span>
                          {conversation.unread > 0 && (
                            <Badge className="bg-blue-600 text-white text-xs h-5 w-5 flex items-center justify-center p-0">
                              {conversation.unread}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className={`text-sm truncate ${
                          conversation.unread > 0 ? 'text-slate-900 font-medium' : 'text-slate-600'
                        }`}>
                          {conversation.lastMessage}
                        </p>
                        {conversation.participants && (
                          <span className="text-xs text-slate-500 flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {conversation.participants}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-slate-50">
          {currentChat ? (
            <>
              {/* Chat Header */}
              <div className="p-4 bg-white border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={currentChat.avatar} />
                      <AvatarFallback className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold">
                        {currentChat.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    {currentChat.type !== 'individual' && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center">
                        {getChatIcon(currentChat.type)}
                      </div>
                    )}
                    {currentChat.online && currentChat.type === 'individual' && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{currentChat.name}</h3>
                    <p className="text-sm text-slate-600">
                      {currentChat.type === 'individual' 
                        ? (currentChat.online ? 'Çevrimiçi' : 'Son görülme: 2 saat önce')
                        : `${currentChat.participants} katılımcı`
                      }
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="hover:bg-slate-100">
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="hover:bg-slate-100">
                    <Video className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="hover:bg-slate-100">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {currentMessages.map((msg) => (
                    <div key={msg.id} className={`flex gap-3 ${msg.isSelf ? 'justify-end' : ''}`}>
                      {!msg.isSelf && (
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-slate-200 text-slate-600 text-sm">
                            {msg.avatar || msg.sender.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                      )}
                      <div className={`max-w-md space-y-1 ${msg.isSelf ? 'items-end' : ''}`}>
                        {!msg.isSelf && (
                          <p className="text-xs font-medium text-slate-600">{msg.sender}</p>
                        )}
                        <div
                          className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                            msg.isSelf
                              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                              : 'bg-white border border-slate-200 text-slate-900 shadow-sm'
                          }`}
                        >
                          {msg.content}
                        </div>
                        <p className={`text-xs text-slate-500 ${msg.isSelf ? 'text-right' : ''}`}>
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Message Input */}
              <div className="p-4 bg-white border-t border-slate-200">
                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="sm" className="hover:bg-slate-100">
                    <Paperclip className="w-4 h-4" />
                  </Button>
                  <div className="flex-1 relative">
                    <Input
                      placeholder="Mesajınızı yazın..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="pr-12 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    />
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-slate-100"
                    >
                      <Smile className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button 
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-slate-200 rounded-2xl flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-slate-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900">Sohbet Seçin</h3>
                  <p className="text-slate-600">Mesajlaşmaya başlamak için bir sohbet seçin</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}