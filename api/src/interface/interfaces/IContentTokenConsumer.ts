import { AnnotatedToken } from "../types/AnnotatedToken"
import { ContentToken } from "../types/ContentToken"

export type IContentTokenConsumer<EventAnnotation> = {
    onToken(token: AnnotatedToken<ContentToken, EventAnnotation>): void
    onEnd(annotation: EventAnnotation): void
}
