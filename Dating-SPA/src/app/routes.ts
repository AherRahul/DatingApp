import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './member/member-list/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';

export const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {
                path: 'members',
                component: MemberListComponent,
                resolve: {
                    users: MemberListResolver
                }
            },
            {
                path: 'members/:id',
                component: MemberDetailComponent,
                resolve: {
                    user: MemberDetailResolver
                }
            },
            {
                path: 'messages',
                component: MessagesComponent
            },
            {
                path: 'list',
                component: ListsComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
