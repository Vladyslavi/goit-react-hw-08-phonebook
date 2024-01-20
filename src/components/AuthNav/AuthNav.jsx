import { Wrapper, Link } from './AuthNav.styled';

export const AuthNav = () => {

    return (
        <Wrapper>
            <Link to="/signup">Sign Up</Link>{' '}
            <Link to="/login">Log In</Link>{' '}
        </Wrapper>
    );
};