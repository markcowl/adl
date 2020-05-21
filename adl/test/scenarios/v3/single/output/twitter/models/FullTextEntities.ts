import { CashtagEntity } from './CashtagEntity';
import { HashtagEntity } from './HashtagEntity';
import { MentionEntity } from './MentionEntity';
import { UrlEntity } from './UrlEntity';
export interface FullTextEntities {
    cashtags: Array<CashtagEntity> & MinimumElements<1>;
    hashtags: Array<HashtagEntity> & MinimumElements<1>;
    mentions: Array<MentionEntity> & MinimumElements<1>;
    urls: Array<UrlEntity> & MinimumElements<1>;
}
