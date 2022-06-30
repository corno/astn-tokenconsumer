import { AnnotatedStructureToken } from "../types/StructureToken"

export type IStructureTokenConsumer<EventAnnotation> = {
    onToken(token: AnnotatedStructureToken<EventAnnotation>): void
    onEnd(annotation: EventAnnotation): void
}
