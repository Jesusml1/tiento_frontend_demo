import { useState, useEffect } from 'react';
import axios from '@/utils/axios';
import { useSearchParams } from 'react-router-dom';

interface DiscordUser {
    username: string;
    id: string;
    avatar: string;
    avatarUrl: string;
}

export const useUserAuth = () => {
    const [user, setUser] = useState<DiscordUser | null>(null);
    const [searchParams] = useSearchParams();
    const token = searchParams.get('t');

    useEffect(() => {
        const storedUser = localStorage.getItem('discord_user_info');
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }

        if (token) {
            axios.get('/api/auth/user', {
                headers: { Authorization: `Bearer ${token}` }
            }).then(response => {
                const user = response.data;
                setUser(user);
                localStorage.setItem('discord_user_info', JSON.stringify(user));
            }).catch(error => {
                console.error(error);
                localStorage.removeItem('discord_user_info');
            });
        }
    }, [token]);

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('discord_user_info');
    };

    return { user, handleLogout };
};