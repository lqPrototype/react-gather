import { valueType } from 'antd/lib/statistic/utils';
import { useRef, useState, useCallback } from 'react';

type InferDefined<T> = T extends infer U | undefined ? U : never;

/** https://github.com/rsuite/rsuite/blob/3ffd1d966d5fd7f0a4f42bb8b08bf0cb65955fef/src/utils/useControlled.ts
 * A hook for controlled value management.
 * In the case of passing the controlled value, the controlled value is returned, otherwise the value in state is returned.
 * Generally used for a component including controlled and uncontrolled modes.
 * @param controlledValue
 * @param defaultValue
 * @param formatValue
 */
function useControlled<V = any, D = V>(
    controlledValue: V,
    defaultValue: D
): [
        V extends undefined ? D : InferDefined<V>,
        (value: React.SetStateAction<V | null>) => void,
        boolean
    ];
function useControlled(controlledValue: valueType[], defaultValue: valueType[]) {
    const controlledRef = useRef(false);
    controlledRef.current = controlledValue !== undefined;

    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);

    // If it is controlled, this directly returns the attribute value.
    const value = controlledRef.current ? controlledValue : uncontrolledValue;

    const setValue = useCallback(
        (nextValue: valueType[]) => {
            // Only update the value in state when it is not under control.
            if (!controlledRef.current) {
                setUncontrolledValue(nextValue);
            }
        },
        [controlledRef]
    );

    return [value, setValue, controlledRef.current];
}

export default useControlled;