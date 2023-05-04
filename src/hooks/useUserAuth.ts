import { useState, useEffect } from 'react';
import axios from '@/utils/axios';
import { useNavigate, useSearchParams } from 'react-router-dom';

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
    const navigate = useNavigate();

    useEffect(() => {
        const discordUserInfo = localStorage.getItem('discord_user_info');
        const userInfo = localStorage.getItem('user');
        if (discordUserInfo) {
            setUser(JSON.parse(discordUserInfo))
        }

        if (token) {
            axios.get('/api/auth/user', {
                headers: { Authorization: `Bearer ${token}` }
            }).then(response => {
                const user = response.data;
                setUser(user);
                localStorage.setItem('discord_user_info', JSON.stringify(user));
                navigate('/dashboard')
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
        navigate('/');
    };

    return { user, handleLogout };
};