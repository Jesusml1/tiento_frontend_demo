import { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const apiUrl = import.meta.env.VITE_API_URL

interface DiscordUser {
    username: string;
    id: string;
    avatar: string;
    avatarUrl: string;
}

export const useUserAuth = () => {
    const [user, setUser] = useState<DiscordUser | null>(null);
    const [cookies, _, removeCookie] = useCookies(['discord_access_token']);

    useEffect(() => {
        if (apiUrl && cookies.discord_access_token) {
            axios.get(apiUrl + '/api/auth/user', {
                headers: { Authorization: `Bearer ${cookies.discord_access_token}` }
            }).then(response => {
                const user = response.data;
                const avatarUrl = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.jpg`;
                setUser({ ...user, avatarUrl });
            }).catch(error => {
                console.error(error);
            });
        }
    }, [apiUrl, cookies.discord_access_token]);

    const handleLogout = () => {
        removeCookie('discord_access_token');
        setUser(null);
    };

    return { user, handleLogout, apiUrl };
};