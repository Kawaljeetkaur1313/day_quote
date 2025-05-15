import {getYear} from '../utilities/dates';
function Footer({copyright = getYear(), author = 'Unknown'}) {
    return(
        <footer>
            <p>
                 &copy; {copyright} {author}
            </p>
        </footer>
    );    
}
export default Footer;