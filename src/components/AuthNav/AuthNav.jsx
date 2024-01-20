import { Wrapper, Link } from './AuthNav.styled';

export const AuthNav = () => {

    return (
        <Wrapper>
            <Link to="/register">Sign Up</Link>{' '}
            <Link to="/login">Log In</Link>{' '}
        </Wrapper>
    );
};