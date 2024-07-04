import { CalendarCheck2 } from 'lucide-react';
import { User } from 'lucide-react';
import { LockKeyhole } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Gavel } from 'lucide-react';
import { Medal } from 'lucide-react';
export const adminPageUrl = [
  {
    url: '/admin/events',
    add: '/admin/events/add',
    edit: '/admin/events/edit',
    icon: CalendarCheck2,
    name: 'Соревнования'
  },
  {
    url: '/admin/users',
    add: '/admin/users/add',
    edit: '/admin/users/edit',
    icon: User ,
    name: 'Пользователи'
  },
  {
    url: '/admin/roles',
    add: '/admin/roles/add',
    edit: '/admin/roles/edit',
    icon: LockKeyhole,
    name: 'Роли'
  },
  // {
  //   url: '/admin/settings',
  //   icon: Settings,
  //   name: 'Настройки'
  // },
  // {
  //   url: '/admin/profile',
  //   icon: CalendarCheck2,
  //   name: 'Профиль'
  // },
  // {
  //   url: '/admin/judges',
  //   icon: Gavel,
  //   name: 'Судьи'
  // },
  {
    url: '/admin/sportsmens',
    icon: Medal,
    name: 'Спортсмены'
  },
]